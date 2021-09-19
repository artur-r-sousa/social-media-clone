'use strict'

const User = use('App/Models/User')

class UserInfoController {
    async register({ request }) {
        const data = request.only(['email', 'password', 'tag', 'name', 'surname', 'profileImg'])

        const user = await User.create(data)

        return user;
    }

    async index() {
        const user = await User.all();
        return user;
    }

    async show ({ params }) {
        const user = await User.findOrFail(params.id);
        return user;
    }
}

module.exports = UserInfoController
