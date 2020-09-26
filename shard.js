const { ShardingManager } = require('discord.js');

const shards = new ShardingManager('./sonic.js', {
    token: "NzQ3NDMzNDM4NjI5MzMwOTk2.X0Ozog.Qud23zO7n3ZZoU4YB35bWTUKSGk",
    totalShards: 1
});

shards.on('launch', shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});

shards.on('message', (shard, msg) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] #${shard.id} | ${msg._eval} | ${msg._result}`);
});

shards.spawn();