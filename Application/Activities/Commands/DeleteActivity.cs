using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class DeleteActivity
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handle(AppDbContext context) : IRequestHandler<Command>
    {
        async Task IRequestHandler<Command>.Handle(
            Command request,
            CancellationToken cancellationToken
        )
        {
            var activity = await context.Activities.FindAsync(request.Id);
            if (activity == null)
                throw new Exception("Cannot find the activity");

            context.Activities.Remove(activity);
            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
