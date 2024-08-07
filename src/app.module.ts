import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database.module";
import { HospitalModule } from "./hospital/hospital.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    HospitalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
