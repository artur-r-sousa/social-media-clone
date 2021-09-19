'use strict'

const User = use('App/Models/User')

class GetUserController {
    async register({ request }) {
        const data = request.only(['tag', 'name', 'surname', 'profileImg'])

        const user = await User.create(data)

        return user;
    }
}

module.exports = GetUserController
