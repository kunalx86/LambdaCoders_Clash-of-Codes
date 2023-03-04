import User from "../model/User.js";


export const editProfile = async (req, res) => {
    try {
        const { email } = req.body;
        const data = req.body;

        if (data.location) {

            data.location = JSON.parse(req.body.location)
        }
        await User.find({ email }).then(async (_user) => {
            if (_user.length !== 0 && email) {
                const __user = await User.findByIdAndUpdate(_user[0]._id, data, { new: true })
                return res.status(203).json(__user)
            } else {
                if (email) {
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
        const { email } = req.body;
        const { userId } = req.body;
        await User.find({ email }).then(async (_user) => {

            if (_user.length !== 0 && email) {
                _user[0].likes.push(userId)
                const __user = await User.findByIdAndUpdate(_user[0]._id, _user[0], { new: true })
                return res.status(203).json(__user)


            } else {
                res.status(403).json("User with email not found")
            }
        })
    } catch (error) {
        res.status(403).json(error)

    }
}

export const dislike = async (req, res) => {

}




export const getUser = async (req, res) => {
    const { email } = req.params;

    try {
        if (email) {
            await User.find({ email }).then(async (_user) => {
                if (_user.length !== 0 && email) {
                    return res.status(203).json(_user)
                } else {
                    res.status(403).json("User with email not found")
                }
            })
        } else {
            res.status(403).json("Please provide email")
        }
    } catch (error) {
        res.status(403).json(error)

    }
}