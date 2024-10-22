"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const user_exception_1 = require("../user/user.exception");
const auth_exception_1 = require("./auth.exception");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(user) {
        const { email, id } = user;
        const payload = { email, id };
        const accessToken = await this.jwtService.signAsync(payload);
        const refreshToken = accessToken;
        return {
            accessToken,
            refreshToken,
            userInfo: user,
        };
    }
    async signup(data) {
        const { email, phone } = data;
        const userExist = await this.userService.findOneByEmailOrPhone({
            email,
            phone,
        });
        if (userExist) {
            throw new user_exception_1.UserExistException();
        }
        return this.userService.create(data);
    }
    async validateUser(data) {
        const { email, password } = data;
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new auth_exception_1.WrongCredentialException();
        }
        const isPasswordMatching = await (0, bcrypt_1.compare)(password, user.password);
        if (!isPasswordMatching) {
            throw new auth_exception_1.WrongCredentialException();
        }
        return user;
    }
    async validateAccessToken(email) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new auth_exception_1.WrongCredentialException();
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map