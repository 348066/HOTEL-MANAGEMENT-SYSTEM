using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HOTtEl.Migrations
{
    /// <inheritdoc />
    public partial class Initial2Migration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "bookingId",
                table: "bookingDtls");

            migrationBuilder.DropColumn(
                name: "bookingStatus",
                table: "bookingDtls");

            migrationBuilder.CreateTable(
                name: "payments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CardNumber = table.Column<long>(type: "bigint", nullable: false),
                    CardholderName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExpirationMonth = table.Column<int>(type: "int", nullable: false),
                    ExpirationYear = table.Column<int>(type: "int", nullable: false),
                    Cvv = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payments", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "payments");

            migrationBuilder.AddColumn<int>(
                name: "bookingId",
                table: "bookingDtls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "bookingStatus",
                table: "bookingDtls",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
