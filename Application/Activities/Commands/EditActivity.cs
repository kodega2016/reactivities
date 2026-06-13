using Application.Activities.DTOs;
using Application.Core;
using AutoMapper;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
  public class Command : IRequest<Result<Unit>>
  {
    public required EditActivityDTO ActivityDTO { get; set; }
  }

  public class Handle(AppDbContext context, IMapper mapper) : IRequestHandler<Command, Result<Unit>>
  {
    async Task<Result<Unit>> IRequestHandler<Command, Result<Unit>>.Handle(
        Command request,
        CancellationToken cancellationToken
    )
    {
      var activity = await context.Activities.FindAsync([request.ActivityDTO.ID], cancellationToken);
      if (activity == null)
        return Result<Unit>.Failure("Cannot find the activity", 404);
      activity.Title = request.ActivityDTO.Title;
      mapper.Map(request.ActivityDTO, activity);
      var result = await context.SaveChangesAsync(cancellationToken) > 0;
      if (!result) return Result<Unit>.Failure("Failed to update the activity", 400);
      return Result<Unit>.Success(Unit.Value);
    }
  }
}
