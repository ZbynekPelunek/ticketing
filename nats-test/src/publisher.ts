import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

const client = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222'
});

client.on('connect', async () => {
    console.log('Publisher connected to NATS');

    const publisher = new TicketCreatedPublisher(client);
    try {
        await publisher.publish({
            id: '132',
            title: 'concert',
            price: 456
        });
    } catch (err) {
        console.error(err);
    }
    
});