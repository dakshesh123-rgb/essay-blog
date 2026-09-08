export async function onRequestPost(context) {
    const SECRET_KEY = "x7F9kL2mP5vR8wQ1tY4bN6cH3jD0sZ";
    try {
        const body = await context.request.json();
        if (body.key !== SECRET_KEY) {
            return new Response(JSON.stringify({ error: "Invalid password key!" }), { 
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
        const data = await context.env.ESSAYS_DB.get('posts');
        let posts = data ? JSON.parse(data) : [];
        
        const newPost = {
            id: Date.now(),
            title: body.title,
            content: body.content,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
        
        posts.unshift(newPost);
        await context.env.ESSAYS_DB.put('posts', JSON.stringify(posts));
        
        return new Response(JSON.stringify({ success: true }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
