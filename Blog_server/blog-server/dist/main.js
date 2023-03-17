"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors = require("cors");
const swagger_1 = require("@nestjs/swagger");
const platform_ws_1 = require("@nestjs/platform-ws");
const fs_1 = require("fs");
const path_1 = require("path");
async function bootstrap() {
    const httpsOptions = {
        key: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '/../src/secrets/RS-BLOG.key')),
        cert: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '/../src/secrets/RS-BLOG.crt')),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Blog-server')
        .setDescription('Server for blog application')
        .setVersion('1.0')
        .addTag('blogs')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(cors());
    app.useWebSocketAdapter(new platform_ws_1.WsAdapter(app));
    await app.listen(3004);
}
bootstrap();
//# sourceMappingURL=main.js.map