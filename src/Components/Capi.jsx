function updatedCapiInformation(
  header,
  NewConfirmed,
  TotalConfirmed,
  NewDeaths,
  totalDeath,
  NewRecovered,
  totalRecorvered
) {
  $(".TotalRegionHeader").html(header);
  $("#newConfInformation").html("New confirmed:  " + NewConfirmed),
    $("#TotalConfirmed").html("Total confirmed:  " + TotalConfirmed),
    $("#NewDeaths").html("New deaths:  " + NewDeaths),
    $("#deathsInformation").html("Total deaths:  " + totalDeath),
    $("#NewRecovered").html("New recovered:  " + NewRecovered),
    $("#recoveredInformation").html("Total recovered:  " + totalRecorvered);
}

function loadTemplate(src) {
  return $.ajax({
    type: "GET",
    url: src,
    async: false,
  }).responseText;
}

function searchCoronaByCode(code) {
  return coronaData.Countries.find((o) => o.CountryCode === code);
}

function searchCoronaBySlug(name) {
  name = name.toLowerCase();
  return coronaData.Countries.filter((item) => item.Slug.indexOf(name) !== -1);
}

//Print Countries and summery
function printCountries(countries, region, search = false) {
  var summeryObj = {
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
  };
  var template = loadTemplate("templates/countryinfo.ejs");
  $(".capiCountryContainer").html("");

  $.each(countries, function (i, field) {
    if (
      countriesMapping[field.CountryCode].region == region ||
      region == "global" ||
      search == true
    ) {
      summeryObj["NewConfirmed"] =
        summeryObj["NewConfirmed"] + field.NewConfirmed;
      summeryObj["TotalConfirmed"] =
        summeryObj["TotalConfirmed"] + field.TotalConfirmed;
      summeryObj["NewDeaths"] = summeryObj["NewDeaths"] + field.NewDeaths;
      summeryObj["TotalDeaths"] = summeryObj["TotalDeaths"] + field.TotalDeaths;
      summeryObj["NewRecovered"] =
        summeryObj["NewRecovered"] + field.TotalDeaths;
      summeryObj["TotalRecovered"] =
        summeryObj["TotalRecovered"] + field.TotalRecovered;
      $(".capiCountryContainer").append(ejs.render(template, field));
    }
  });
  updatedCapiInformation(
    region,
    summeryObj.NewConfirmed,
    summeryObj.TotalConfirmed,
    summeryObj.NewDeaths,
    summeryObj.TotalDeaths,
    summeryObj.NewRecovered,
    summeryObj.TotalRecovered
  );
}

/** Onload functions */
var countriesMapping = {};
var coronaData = null;
$(document).ready(function () {
  $.getJSON("https://restcountries.eu/rest/v2/all", function (result) {
    $.each(result, function (i, field) {
      field.region = field.region.toLowerCase();
      countriesMapping[field.alpha2Code] = field;
    });
  });

  $.getJSON("https://api.covid19api.com/summary", function (result) {
    coronaData = result;
    $(".regionBtn[data-region='global']").trigger("click");
  });
});

/** Click functions */

$(".regionBtn").click(function () {
  $(".regionBtn").removeClass("active");
  $(this).addClass("active");
  var region = $(this).data("region");
  printCountries(coronaData.Countries, region);
});

$(".searchCoronaCountries").keyup(function () {
  $(".regionBtn, .capiCoronaInfomation").removeClass("active");
  var items = searchCoronaBySlug($(this).val());
  printCountries(items, "Search: " + $(this).val(), true);
});

$(document).on("click", ".capiCoronaInfomation", function () {
  var country = searchCoronaByCode($(this).data("countrycode"));
  $(".capiCoronaInfomation").removeClass("active");
  $(this).addClass("active");
  updatedCapiInformation(
    country.Country,
    country.NewConfirmed,
    country.TotalConfirmed,
    country.NewDeaths,
    country.TotalDeaths,
    country.NewRecovered,
    country.TotalRecovered
  );
});
