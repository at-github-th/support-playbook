
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
app.MapGet("/", () => new { name = "Support Playbook (LLM chat + runbooks + actions) API", ok = true });
app.MapPost("/api/chat", (dynamic _)=> Results.Json(new { reply = "Mock assistant response" }));
app.MapGet("/api/runbooks", ()=> new[] { new { id="RB-1", title="Restart Kiosk" }, new { id="RB-2", title="Refund Flow" } });
app.MapPost("/api/actions/run", (dynamic _)=> Results.Json(new { ok = true, actionId = "A-1" }));
app.Run("http://localhost:5110");
