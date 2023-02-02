using Microsoft.AspNetCore.SignalR;

namespace CollaborationApp.Hubs
{
    public class TextEditorHub : Hub
    {
        public async Task UpdateDocument(string content)
        {
            await Clients.All.SendAsync("ReceiveUpdate", content);
        }
    }
}
