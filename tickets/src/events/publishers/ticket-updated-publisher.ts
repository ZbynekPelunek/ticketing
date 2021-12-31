import { Publisher, Subjects, TicketUpdatedEvent } from '@minuslevel/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}