using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HOTtEl.Migrations
{
    /// <inheritdoc />
    public partial class Initial1Migration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "newRegCuss",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<long>(
                name: "contact",
                table: "newRegCuss",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "newRegCuss");

            migrationBuilder.DropColumn(
                name: "contact",
                table: "newRegCuss");
        }
    }
}
