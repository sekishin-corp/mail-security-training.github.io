const GAS_URL = "https://script.google.com/macros/s/AKfycbxHtT1XH9x8BOSAJiqZvCckuhPKtlFVPwosiOOzSm-Qd9pxXKBClLF2Y91hIRMr1sfpQQ/exec";

const params = new URLSearchParams(window.location.search);

const employeeId = params.get("e");
const trainingId = params.get("t");

if (employeeId && trainingId) {
  fetch(`${GAS_URL}?e=${encodeURIComponent(employeeId)}&t=${encodeURIComponent(trainingId)}`, {
    method: "GET",
    mode: "no-cors"
  });
}
