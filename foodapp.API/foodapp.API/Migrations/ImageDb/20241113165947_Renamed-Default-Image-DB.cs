using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace foodapp.API.Migrations.ImageDb
{
    /// <inheritdoc />
    public partial class RenamedDefaultImageDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_defaultProfileImages",
                table: "defaultProfileImages");

            migrationBuilder.RenameTable(
                name: "defaultProfileImages",
                newName: "DefaultProfileImages");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DefaultProfileImages",
                table: "DefaultProfileImages",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_DefaultProfileImages",
                table: "DefaultProfileImages");

            migrationBuilder.RenameTable(
                name: "DefaultProfileImages",
                newName: "defaultProfileImages");

            migrationBuilder.AddPrimaryKey(
                name: "PK_defaultProfileImages",
                table: "defaultProfileImages",
                column: "Id");
        }
    }
}
