using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTaskModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DueDate",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "IsCompleted",
                table: "Tasks");

            migrationBuilder.RenameColumn(
                name: "Priority",
                table: "Tasks",
                newName: "Completed");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Tasks",
                newName: "Title");

            migrationBuilder.AddColumn<string>(
                name: "Due",
                table: "Tasks",
                type: "TEXT",
                nullable: false,
                defaultValue: "No due date");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Due",
                table: "Tasks");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Tasks",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Completed",
                table: "Tasks",
                newName: "Priority");

            migrationBuilder.AddColumn<DateTime>(
                name: "DueDate",
                table: "Tasks",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsCompleted",
                table: "Tasks",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }
    }
}
