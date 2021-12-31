import { Publisher, Subjects, TicketCreatedEvent } from '@minuslevel/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}