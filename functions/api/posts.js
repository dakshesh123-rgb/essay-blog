export async function onRequestGet(context) {
    try {
        const data = await context.env.ESSAYS_DB.get('posts');
        const posts = data ? JSON.parse(data) : [];
        return new Response(JSON.stringify(posts), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
