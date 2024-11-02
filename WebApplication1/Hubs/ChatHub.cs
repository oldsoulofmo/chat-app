using Microsoft.AspNetCore.SignalR;

namespace WebApplication1.Hubs;


public class ChatHub : Hub
{
    public async Task SendMessage(String user, string message)
    {
        await Clients.All.SendAsync("ReceiveMessage", user, message);   
    }
    
}