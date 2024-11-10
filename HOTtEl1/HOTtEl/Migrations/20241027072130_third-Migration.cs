using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HOTtEl.Migrations
{
    /// <inheritdoc />
    public partial class thirdMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "addHotels",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    hotelname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    hoteltype = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    hotelid = table.Column<int>(type: "int", nullable: false),
                    city = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    distance = table.Column<double>(type: "float", nullable: false),
                    title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    discription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cheapestprice = table.Column<double>(type: "float", nullable: false),
                    numberofrooms = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_addHotels", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "addHotels");
        }
    }
}
