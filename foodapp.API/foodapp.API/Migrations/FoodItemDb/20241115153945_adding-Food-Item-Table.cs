using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace foodapp.API.Migrations.FoodItemDb
{
    /// <inheritdoc />
    public partial class addingFoodItemTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FoodItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Category = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    FellTo = table.Column<List<string>>(type: "jsonb", nullable: false),
                    QuickSummary = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    Summary = table.Column<string>(type: "text", nullable: false),
                    Price = table.Column<decimal>(type: "numeric(10,2)", nullable: false),
                    AggregateLikes = table.Column<int>(type: "integer", nullable: false),
                    Reviews = table.Column<List<string>>(type: "jsonb", nullable: false),
                    Ingredients = table.Column<List<string>>(type: "jsonb", nullable: false),
                    IsCustomizable = table.Column<bool>(type: "boolean", nullable: false),
                    Image = table.Column<string>(type: "text", nullable: false),
                    Servings = table.Column<string>(type: "text", nullable: false),
                    ReadyInMinutes = table.Column<int>(type: "integer", nullable: false),
                    Size = table.Column<string>(type: "text", nullable: false),
                    Tags = table.Column<string>(type: "text", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FoodItems", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FoodItems");
        }
    }
}
