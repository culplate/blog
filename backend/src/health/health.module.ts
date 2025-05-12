import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

// This module is responsible for the health check functionality of the application.

@Module({
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
