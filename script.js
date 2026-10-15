const eventOutput = document.getElementById("event-output");

function trackEvent(eventName, sourceElement) {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    page: "atena-assessment-mock",
    source: sourceElement?.textContent?.trim() || "unknown"
  };

  console.log("[Mock Analytics Event]", payload);

  if (eventOutput) {
    eventOutput.textContent = `${eventName} • ${new Date().toLocaleTimeString()}`;
  }
}

document.querySelectorAll(".js-track").forEach((element) => {
  element.addEventListener("click", (event) => {
    const eventName = element.dataset.event || "cta_click";
    trackEvent(eventName, element);

    if (element.id === "mock-play-button") {
      event.preventDefault();
    }
  });
});