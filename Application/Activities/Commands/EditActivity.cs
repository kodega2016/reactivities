using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
    public class Command : IRequest
    {
        public required Activity Activity { get; set; }
    }

    public class Handle(AppDbContext context) : IRequestHandler<Command>
    {
        async Task IRequestHandler<Command>.Handle(
            Command request,
            CancellationToken cancellationToken
        )
        {
            var activity = await context.Activities.FindAsync(request.Activity.Id);
            if (activity == null)
                throw new Exception("Cannot find the activity");
            activity.Title = request.Activity.Title;
            await context.SaveChangesAsync();
        }
    }
}
