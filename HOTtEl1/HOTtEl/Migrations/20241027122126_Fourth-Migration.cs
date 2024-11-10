using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HOTtEl.Migrations
{
    /// <inheritdoc />
    public partial class FourthMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "bookingDtls",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    bookingId = table.Column<int>(type: "int", nullable: false),
                    customerName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    customerContact = table.Column<long>(type: "bigint", nullable: false),
                    checkInDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    checkOutDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    totalRooms = table.Column<int>(type: "int", nullable: false),
                    totalAmount = table.Column<double>(type: "float", nullable: false),
                    bookingStatus = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bookingDtls", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "bookingDtls");
        }
    }
}
