import bcrypt from "bcryptjs"

export default class bcryptPass {
    static hashPassword (password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }
    static comparePassword(password, basePassword){
        return bcrypt.compareSync(password, basePassword)
    }
}
