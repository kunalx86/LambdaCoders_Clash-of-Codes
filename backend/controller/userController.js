import User from "../model/User.js";
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
cloudinary.config({
    cloud_name: "dchl9ekss",
    api_key: 666346669499583,
    api_secret: "uSykoV02OLomXo19um19SkZHfJ8",
});

function calculate_age(dob) {
    console.log(dob)
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}



export const editProfile = async (req, res) => {
    try {
        const { mobileNo } = req.body;
        const data = req.body;

        if (data.location) {

            data.location = JSON.parse(req.body.location)
        }
        if (data.ageRange) {
            data.ageRange = JSON.parse(req.body.ageRange)
        }
        if (data.sexualOrientation) {
            data.sexualOrientation = JSON.parse(req.body.sexualOrientation)
        }

        if (data.DOB) {
            data.age = calculate_age(new Date(data.DOB.slice(0, 10)))
        }
        await User.findOne({ mobileNo }).then(async (_user) => {
            if (_user && mobileNo) {
                const __user = await User.findByIdAndUpdate(_user._id, data, { new: true })
                return res.status(203).json(__user)
            } else {
                if (mobileNo) {
                    const newUser = new User(data)
                    newUser.save();
                    return res.status(203).json(newUser)
                }
            }
        })
    } catch (error) {
        console.log(error)
        res.status(403).json(error)

    }
}

export const like = async (req, res) => {
    try {
        const { mobileNo } = req.body;
        const { userId } = req.body;
        await User.findOne({ mobileNo }).then(async (_user) => {

            if (_user && mobileNo) {
                _user.likes.push(userId)
                const __user = await User.findByIdAndUpdate(_user._id, _user, { new: true })
                return res.status(203).json(__user)


            } else {
                res.status(403).json("User with mobileNo not found")
            }
        })
    } catch (error) {
        res.status(403).json(error)

    }
}

export const dislike = async (req, res) => {
    try {
        const { mobileNo } = req.body;
        const { userId } = req.body;
        await User.findOne({ mobileNo }).then(async (_user) => {

            if (_user && mobileNo) {
                _user.dislikes.push(userId)
                const __user = await User.findByIdAndUpdate(_user._id, _user, { new: true })
                return res.status(203).json(__user)


            } else {
                res.status(403).json("User with mobileNo not found")
            }
        })
    } catch (error) {
        res.status(403).json(error)

    }
}




export const getUser = async (req, res) => {
    const { mobileNo } = req.params;

    try {
        if (mobileNo) {
            await User.findOne({ mobileNo }).then(async (_user) => {
                if (_user && mobileNo) {
                    return res.status(203).json(_user)
                } else {
                    res.status(403).json("User with mobileNo not found")
                }
            })
        } else {
            res.status(403).json("Please provide mobileNo")
        }
    } catch (error) {
        res.status(403).json(error)

    }
}


export const addPhotos = async (req, res) => {
    const { mobileNo } = req.body;
    let photos = req.files;
    photos = Object.values(photos);
    if (mobileNo) {
        await User.findOne({ mobileNo }).then(async (_user) => {
            if (_user && mobileNo) {
                for (let i = 0; i < photos.length; i++) {
                    try {
                        await cloudinary.uploader.upload(photos[i].tempFilePath, async (err, resultB) => {
                            const img = resultB.url;
                            _user.photos.push(img)
                            await fs.unlinkSync(photos[i].tempFilePath)
                        })

                    } catch (error) {
                        console.log(error)
                        res.status(403).json({ message: error.message })
                    }
                }
                const __user = await User.findByIdAndUpdate(_user._id, _user, { new: true })
                return res.status(203).json(__user)


            } else {
                res.status(403).json("User with mobileNo not found")
            }
        })
    } else {
        res.status(403).json("Please provide mobileNo address")
    }

}

export const userSuggestions = async (req, res) => {
    {/* 
        parameters for latest users
        --latest 100 users(D)
        --based on location(D)
        --orientation of current user should contain other users gender(D)
        --users score must be in the same range (D)
        --low matches (D)
        --age limit (D)
        -- looking for [relationship , casual , prefereNotToSay]
        
*/}
    const { mobileNo } = req.params;
    try {
        await User.findOne({ mobileNo }).then(async (_user) => {
            const suggestedUsers = await User.find(
                {
                    location: {
                        $near: {
                            $geometry: _user.location,
                            $minDistance: 0,
                            $maxDistance: _user.radius * 1000
                        }
                    },
                    gender: {
                        $in: _user.sexualOrientation
                    },
                    age: {
                        $gt: _user.ageRange[0], $lt: _user.ageRange[1]
                    },
                    score: {
                        $gt: _user.score - 20, $lt: _user.score + 20
                    },
                    lookingFor: {
                        $in: ["prefereNotToSay", _user.lookingFor]
                    }

                }
            ).sort({ _id: -1 }).sort({ matches: 1 }).limit(100);
            res.status(203).json(suggestedUsers)
        })

    } catch (error) {

    }
}