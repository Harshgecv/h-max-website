// ===== STATE → DISTRICT AUTO LOAD (Apps Script API) =====

document.addEventListener("DOMContentLoaded", function () {
  const stateSelect = document.getElementById("state");
  const districtSelect = document.getElementById("district");

  if (!stateSelect || !districtSelect) {
    console.error("State or District dropdown not found");
    return;
  }

  stateSelect.addEventListener("change", function () {
    const state = this.value;

    // Reset district dropdown
    districtSelect.innerHTML = '<option value="">Select District</option>';

    if (!state) return;

    // Show loading
    districtSelect.innerHTML = '<option value="">Loading districts...</option>';

    fetch(
      "https://script.google.com/macros/s/AKfycbx7z59d69Br1mFcB9YA45lR-ClbXdBwNVbREAoj1zzwurQ7GXlfj0R6qwLzGZTjLXA7/exec"
      + "?state=" + encodeURIComponent(state)
    )
      .then(response => response.json())
      .then(data => {
        districtSelect.innerHTML = '<option value="">Select District</option>';

        if (data.districts && data.districts.length > 0) {
          data.districts.forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
          });
        } else {
          districtSelect.innerHTML =
            '<option value="">No districts found</option>';
        }
      })
      .catch(error => {
        console.error("Error loading districts:", error);
        districtSelect.innerHTML =
          '<option value="">Error loading districts</option>';
      });
  });
});
