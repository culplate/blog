import { Controller, Get, Header, HttpCode } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  // Prevent caching of the health check response to ensure that the client always receives the latest status.
  @Header('Cache-Control', 'no-store')
  @HttpCode(200)
  getHealthStatus() {
    return this.healthService.check();
  }
}
