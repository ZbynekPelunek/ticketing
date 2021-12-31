import { Publisher, Subjects, OrderCreatedEvent } from '@minuslevel/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}