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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const mongoose_1 = require("@nestjs/mongoose");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const typeorm_2 = require("typeorm");
const post_info_module_1 = require("./post-info/post-info.module");
const admin_module_1 = require("./admin/admin.module");
const block_module_1 = require("./block/block.module");
const comment_module_1 = require("./comment/comment.module");
const follower_module_1 = require("./follower/follower.module");
const hashtag_module_1 = require("./hashtag/hashtag.module");
const hourshine_module_1 = require("./hourshine/hourshine.module");
const notifications_module_1 = require("./notifications/notifications.module");
const news_module_1 = require("./news/news.module");
const video_module_1 = require("./video/video.module");
const hourshineteam_module_1 = require("./hourshineteam/hourshineteam.module");
const images_module_1 = require("./images/images.module");
const like_module_1 = require("./like/like.module");
const like_comment_module_1 = require("./like-comment/like-comment.module");
const user_voting_module_1 = require("./user-voting/user-voting.module");
const vofe_module_1 = require("./vofe/vofe.module");
const chats_module_1 = require("./chats/chats.module");
const views_module_1 = require("./views/views.module");
const messaging_module_1 = require("./messaging/messaging.module");
const mailer_1 = require("@nestjs-modules/mailer");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '202.21.38.119',
                port: 3306,
                username: 'break2ru_raghu',
                password: 'Rnath123@',
                database: 'break2ru_test',
                entities: [
                    user_entity_1.User
                ],
                synchronize: true,
                autoLoadEntities: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                include: [post_info_module_1.PostInfoModule, users_module_1.UsersModule],
                autoSchemaFile: true,
            }),
            users_module_1.UsersModule,
            jwt_1.JwtModule.register({
                secretOrPrivateKey: 'secret12356789'
            }),
            post_info_module_1.PostInfoModule,
            admin_module_1.AdminModule,
            block_module_1.BlockModule,
            comment_module_1.CommentModule,
            follower_module_1.FollowerModule,
            hashtag_module_1.HashtagModule,
            hourshine_module_1.HourshineModule,
            notifications_module_1.NotificationsModule,
            news_module_1.NewsModule,
            video_module_1.VideoModule,
            hourshineteam_module_1.HourshineteamModule,
            images_module_1.ImagesModule,
            like_module_1.LikeModule,
            like_comment_module_1.LikeCommentModule,
            user_voting_module_1.UserVotingModule,
            vofe_module_1.VofeModule,
            mongoose_1.MongooseModule.forRoot('mongodb://root:JZ3atM8TZbWc@13.233.35.149:27017/break2ru?authSource=admin'),
            chats_module_1.ChatsModule,
            views_module_1.ViewsModule,
            messaging_module_1.MessagingModule,
            mailer_1.MailerModule.forRoot({
                transport: 'smtps://info@curveinfotech.com:Curve2692@mail.curveinfotech.com',
                defaults: {
                    from: '"Break2ru" <info@curveinfotech.com>',
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map