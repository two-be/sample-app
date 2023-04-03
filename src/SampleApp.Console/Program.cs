// See https://aka.ms/new-console-template for more information
using System.Globalization;

var culture = new CultureInfo("th-TH");
var displayDate = DateTime.Now.ToString("dd MMM yy", culture);
Console.WriteLine(displayDate);

Console.WriteLine("Hello, World!");
