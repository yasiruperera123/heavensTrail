const apiKey =
  "d42fed51636727929221682c66241c03b1b48f56349f69f5785496a657901b97";
async function fetchTourPackages() {
  const url = `https://www.heavenstrails.com/api/v1/web/tour_packages`;
  const headers = {
    "x-api-key": apiKey,
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching property data:", error.message);
    throw error;
  }
}

export { fetchTourPackages };
