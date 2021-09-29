const ytdl = require('ytdl-core');

exports.run = async (client, message, args) => {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
        return message.reply('You need to be in a voice channel to play music!');
    }
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
        return message.reply('I need the permissions to join and speak in your voice channel!');
    }
    const songInfo = await ytdl.getInfo(args[0]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url,
        duration: songInfo.length_seconds
    };
    if (!client.queue) client.queue = [];
    client.queue.push(song);
    if (!client.isPlaying) {
        client.isPlaying = true;
        play(client, message);
    }
}