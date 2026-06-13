using Application.Core;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class DeleteActivity
{
  public class Command : IRequest<Result<Unit>>
  {
    public required string Id { get; set; }
  }

  public class Handle(AppDbContext context) : IRequestHandler<Command, Result<Unit>>
  {
    async Task<Result<Unit>> IRequestHandler<Command, Result<Unit>>.Handle(
        Command request,
        CancellationToken cancellationToken
    )
    {
      var activity = await context.Activities.FindAsync([request.Id], cancellationToken);
      if (activity == null)
        return Result<Unit>.Failure("Activity not found.", 404);

      context.Activities.Remove(activity);
      var result = await context.SaveChangesAsync(cancellationToken) > 0;
      if (!result) return Result<Unit>.Failure("Failed to delete the activity", 404);
      return Result<Unit>.Success(Unit.Value);

    }
  }
}
