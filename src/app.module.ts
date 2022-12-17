import { Module } from '@nestjs/common'
import { CatalogModule } from '@catalog/catalog.module'
import { SquareModule } from '@square/square.module'
import { ConfigModule } from '@nestjs/config'
import { ConfigModuleConfig } from './common/config'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { IamModule } from './iam/iam.module';

@Module({
  imports: [
    ConfigModule.forRoot(ConfigModuleConfig),
    // MongooseModule.forRoot(process.env.DB_URL),
    CatalogModule,
    SquareModule,
    AuthModule,
    UsersModule,
    IamModule,
  ],
})
export class AppModule {}
