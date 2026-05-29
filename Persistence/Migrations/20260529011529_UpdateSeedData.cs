using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.InsertData(
                table: "Activities",
                columns: new[] { "Id", "Category", "City", "Date", "Description", "IsCancelled", "Latitude", "Longitude", "Title", "Venue" },
                values: new object[,]
                {
                    { "11111111-1111-1111-1111-111111111111", "drinks", "London", new DateTime(2024, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Activity 2 months ago", false, 51.511716649999997, -0.1256611057818921, "Past Activity 1", "The Lamb and Flag, 33, Rose Street, Seven Dials, Covent Garden, London, Greater London, England, WC2E 9EB, United Kingdom" },
                    { "22222222-2222-2222-2222-222222222222", "culture", "Paris", new DateTime(2024, 5, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Activity 1 month ago", false, 48.861147299999999, 2.3380276870466599, "Past Activity 2", "Louvre Museum, Rue Saint-Honoré, Quartier du Palais Royal, 1st Arrondissement, Paris, Ile-de-France, Metropolitan France, 75001, France" },
                    { "33333333-3333-3333-3333-333333333333", "culture", "London", new DateTime(2024, 7, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Activity 1 month in future", false, 51.496510900000004, -0.17600190725447445, "Future Activity 1", "Natural History Museum" },
                    { "44444444-4444-4444-4444-444444444444", "music", "London", new DateTime(2024, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Activity 2 months in future", false, 51.502936649999995, 0.0032029278126681844, "Future Activity 2", "The O2" },
                    { "55555555-5555-5555-5555-555555555555", "drinks", "London", new DateTime(2024, 9, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Activity 3 months in future", false, 51.501778000000002, -0.053577, "Future Activity 3", "The Mayflower" },
                    { "66666666-6666-6666-6666-666666666666", "drinks", "London", new DateTime(2024, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Activity 4 months in future", false, 51.512146650000005, -0.10364680647106028, "Future Activity 4", "The Blackfriar" },
                    { "77777777-7777-7777-7777-777777777777", "culture", "London", new DateTime(2024, 11, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Activity 5 months in future", false, 51.523762900000001, -0.15847430000000001, "Future Activity 5", "Sherlock Holmes Museum, 221b, Baker Street, Marylebone, London, Greater London, England, NW1 6XE, United Kingdom" },
                    { "88888888-8888-8888-8888-888888888888", "music", "London", new DateTime(2024, 12, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Activity 6 months in future", false, 51.543250499999999, -0.15197608174931165, "Future Activity 6", "Roundhouse, Chalk Farm Road, Maitland Park, Chalk Farm, London Borough of Camden, London, Greater London, England, NW1 8EH, United Kingdom" },
                    { "99999999-9999-9999-9999-999999999999", "travel", "London", new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Activity 2 months ago", false, 51.5575525, -0.78140399999999999, "Future Activity 7", "River Thames, England, United Kingdom" },
                    { "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa", "film", "London", new DateTime(2025, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Activity 8 months in future", false, 51.5575525, -0.78140399999999999, "Future Activity 8", "River Thames, England, United Kingdom" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "11111111-1111-1111-1111-111111111111");

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "22222222-2222-2222-2222-222222222222");

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "33333333-3333-3333-3333-333333333333");

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "44444444-4444-4444-4444-444444444444");

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "55555555-5555-5555-5555-555555555555");

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "66666666-6666-6666-6666-666666666666");

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "77777777-7777-7777-7777-777777777777");

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "88888888-8888-8888-8888-888888888888");

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "99999999-9999-9999-9999-999999999999");

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa");

            migrationBuilder.InsertData(
                table: "Activities",
                columns: new[] { "Id", "Category", "City", "Date", "Description", "IsCancelled", "Latitude", "Longitude", "Title", "Venue" },
                values: new object[] { "1", "General", "Sample City", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a sample activity.", false, 0.0, 0.0, "Sample Activity", "Sample Venue" });
        }
    }
}
