using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public required DbSet<Activity> Activities { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // seeding some data for the Activities table
        var activities = new List<Activity>()
        {
            new()
            {
                Id = "11111111-1111-1111-1111-111111111111",
                Title = "Past Activity 1",
                Date = new DateTime(2024, 4, 1),
                Description = "Activity 2 months ago",
                Category = "drinks",
                City = "London",
                Venue =
                    "The Lamb and Flag, 33, Rose Street, Seven Dials, Covent Garden, London, Greater London, England, WC2E 9EB, United Kingdom",
                Latitude = 51.51171665,
                Longitude = -0.1256611057818921,
            },
            new()
            {
                Id = "22222222-2222-2222-2222-222222222222",
                Title = "Past Activity 2",
                Date = new DateTime(2024, 5, 1),
                Description = "Activity 1 month ago",
                Category = "culture",
                City = "Paris",
                Venue =
                    "Louvre Museum, Rue Saint-Honoré, Quartier du Palais Royal, 1st Arrondissement, Paris, Ile-de-France, Metropolitan France, 75001, France",
                Latitude = 48.8611473,
                Longitude = 2.33802768704666,
            },
            new()
            {
                Id = "33333333-3333-3333-3333-333333333333",
                Title = "Future Activity 1",
                Date = new DateTime(2024, 7, 1),
                Description = "Activity 1 month in future",
                Category = "culture",
                City = "London",
                Venue = "Natural History Museum",
                Latitude = 51.496510900000004,
                Longitude = -0.17600190725447445,
            },
            new()
            {
                Id = "44444444-4444-4444-4444-444444444444",
                Title = "Future Activity 2",
                Date = new DateTime(2024, 8, 1),
                Description = "Activity 2 months in future",
                Category = "music",
                City = "London",
                Venue = "The O2",
                Latitude = 51.502936649999995,
                Longitude = 0.0032029278126681844,
            },
            new()
            {
                Id = "55555555-5555-5555-5555-555555555555",
                Title = "Future Activity 3",
                Date = new DateTime(2024, 9, 1),
                Description = "Activity 3 months in future",
                Category = "drinks",
                City = "London",
                Venue = "The Mayflower",
                Latitude = 51.501778,
                Longitude = -0.053577,
            },
            new()
            {
                Id = "66666666-6666-6666-6666-666666666666",
                Title = "Future Activity 4",
                Date = new DateTime(2024, 10, 1),
                Description = "Activity 4 months in future",
                Category = "drinks",
                City = "London",
                Venue = "The Blackfriar",
                Latitude = 51.512146650000005,
                Longitude = -0.10364680647106028,
            },
            new()
            {
                Id = "77777777-7777-7777-7777-777777777777",
                Title = "Future Activity 5",
                Date = new DateTime(2024, 11, 1),
                Description = "Activity 5 months in future",
                Category = "culture",
                City = "London",
                Venue =
                    "Sherlock Holmes Museum, 221b, Baker Street, Marylebone, London, Greater London, England, NW1 6XE, United Kingdom",
                Latitude = 51.5237629,
                Longitude = -0.1584743,
            },
            new()
            {
                Id = "88888888-8888-8888-8888-888888888888",
                Title = "Future Activity 6",
                Date = new DateTime(2024, 12, 1),
                Description = "Activity 6 months in future",
                Category = "music",
                City = "London",
                Venue =
                    "Roundhouse, Chalk Farm Road, Maitland Park, Chalk Farm, London Borough of Camden, London, Greater London, England, NW1 8EH, United Kingdom",
                Latitude = 51.5432505,
                Longitude = -0.15197608174931165,
            },
            new()
            {
                Id = "99999999-9999-9999-9999-999999999999",
                Title = "Future Activity 7",
                Date = new DateTime(2025, 1, 1),
                Description = "Activity 2 months ago",
                Category = "travel",
                City = "London",
                Venue = "River Thames, England, United Kingdom",
                Latitude = 51.5575525,
                Longitude = -0.781404,
            },
            new()
            {
                Id = "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
                Title = "Future Activity 8",
                Date = new DateTime(2025, 2, 1),
                Description = "Activity 8 months in future",
                Category = "film",
                City = "London",
                Venue = "River Thames, England, United Kingdom",
                Latitude = 51.5575525,
                Longitude = -0.781404,
            },
        };

        modelBuilder.Entity<Activity>().HasData(activities.ToArray());
    }
}
