import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class LoggerService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://zetglqre:XnUxoLRyoDJRVmeW6Ri7vCjgbSQ7-YVp@puffin.rmq2.cloudamqp.com/zetglqre'],
        queue: 'auth_queue', // Must match the auth service queue
      },
    });

    this.client
      .send<string>('login', {}) // Define your message pattern here (e.g., 'login')
      .subscribe((data: any) => {
        console.log('Login Event Received:', data);
        // Here you can log the login attempt to your desired destination
      });
  }
}
