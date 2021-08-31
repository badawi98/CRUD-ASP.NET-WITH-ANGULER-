// previous code in <coding-challenge-api.service.ts> file 
    return this.httpClient.get('https://localhost:44341/health', { responseType: 'text' });
// after changing the port number in <coding-challenge-api.service.ts> file
return this.httpClient.get('https://localhost:5001/health', { responseType: 'text' });
