export async function onRequestPut(context) {
    const SECRET_KEY = "x7F9kL2mP5vR8wQ1tY4bN6cH3jD0sZ";
    try {
        const id = parseInt(context.params.id);
        const body = await context.request.json();
        
        if (body.key !== SECRET_KEY) {
            return new Response(JSON.stringify({ error: "Invalid password key!" }), { 
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
        const data = await context.env.ESSAYS_DB.get('posts');
        let posts = data ? JSON.parse(data) : [];
        
        const postIndex = posts.findIndex(p => p.id === id);
        if (postIndex === -1) {
            return new Response(JSON.stringify({ error: "Post not found" }), { 
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
        posts[postIndex].title = body.title;
        posts[postIndex].content = body.content;
        
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

export async function onRequestDelete(context) {
    const SECRET_KEY = "x7F9kL2mP5vR8wQ1tY4bN6cH3jD0sZ";
    try {
        const id = parseInt(context.params.id);
        const body = await context.request.json();
        
        if (body.key !== SECRET_KEY) {
            return new Response(JSON.stringify({ error: "Invalid password key!" }), { 
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
        const data = await context.env.ESSAYS_DB.get('posts');
        let posts = data ? JSON.parse(data) : [];
        
        const initialLength = posts.length;
        posts = posts.filter(p => p.id !== id);
        
        if (posts.length === initialLength) {
            return new Response(JSON.stringify({ error: "Post not found" }), { 
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
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
