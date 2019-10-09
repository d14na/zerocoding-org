# ZeroNet sites

ZeroNet sites, or *zites*, as we call them, are distributed across the network.


## Why ZeroNet is better than Internet

### Internet

Here is the scheme of the Internet:

     ________       +--------+   |                |
    |        |      | iPhone |   |                |
    |  iPad  |      +--------+   |                |      ______________
    |________|-----------+       |                |     |              |
                         |       |    ________    |  +--|    Google    |
       _________         |       |   |  /..\  |   |  |  |______________|
      | Windows |--------+-------|---|  \__/  |---|--+   ______________
      |_________|                |   |___||___|   |  |  |              |
      |_|_|_|_|_|                |                |  +--|   Facebook   |
      |_|_|_|_|_|                |                |     |______________|
                                 |                |
           *Devices*             |   *Provider*   |         *Sites*

And that's what happens if your provider is down or the server you're trying to connect is down or blocked:

     ________       +--------+   |                |
    |        |      | iPhone |   |                |
    |  iPad  |      +--------+   |                |      ______________
    |________|-----------+       |                |     |              |
                         |       |    ________    |     |    Google    |
       _________         |       |   |\/\/\/\/|   |     |______________|
      | Windows |--------+-------|---|/\ No /\|   |      ______________
      |_________|                |   |\/\/\/\/|   |     |              |
      |_|_|_|_|_|                |                |     |   Facebook   |
      |_|_|_|_|_|                |                |     |______________|
                                 |                |
           *Devices*             |   *Provider*   |         *Sites*

You've got no access to the server.


### ZeroNet

And this is ZeroNet:

     ________       +--------+
    |        |      | iPhone |
    |  iPad  |      +--------+
    |________|-----------+
         |               |
       __|______         |
      | Windows |--------+
      |_________|
      |_|_|_|_|_|
      |_|_|_|_|_|

      *Devices = zites*

If *iPhone* is down or blocked:

     ________       +--------+
    |        |      |\/ No \/|
    |  iPad  |      +--------+
    |________|
         |
       __|______
      | Windows |
      |_________|
      |_|_|_|_|_|
      |_|_|_|_|_|

      *Devices = zites*

Other peers still have access to the zites.


## Installing ZeroNet

To use ZeroNet on Windows, Mac or Linux machine, install it first. Visit `https://zeronet.io` and download ZeroNet there.


## Visiting zites

ZeroNet installs a local server on your computer, on *http://127.0.0.1:43110* address. When you run ZeroNet, a browser window opens.

On the left, you can see the list of zites hosted by your machine, and a few links to other helpful zites. Click zite to open (or download) it. Feel free to visit some of them now.

I said *download* because that's how ZeroNet works. Let's discuss it later.


## Getting ZeroID

A user can register on such *Internet* sites as Google, eBay, etc. On zites, registration is not technically possible, but don't worry. Instead, ZeroNet introduces *Certificate Authorities*. For example, [ZeroID](http://127.0.0.1:43110/1iD5ZQJMNXu43w1qLB8sfdHVKppVMduGz/). This is the most popular certificate provider, so let's register there first.

Visit [ZeroID](http://127.0.0.1:43110/1iD5ZQJMNXu43w1qLB8sfdHVKppVMduGz/) and register with any nickname you like. (*Note: If you don't want to reveal your IP, set up ZeroNet to use TOR.*)

You enterd nickname, but what about password? It was generated automatically. There is a `users.json` file in ZeroNet root directory. When you register on *ZeroID*, new entries appear in `users.json`: your public and private keys for *ZeroID*. You shouldn't share your private key - it's your password. And public key is your login - you share it with zites you post on. Your nickname is also stored there. If you lose `users.json` or manually change your public and private keys or nickname, you cannot access your account. It's a good idea to backup this file.


## Getting ZeroTalk account

Now, let's check a zite which let you use your *ZeroID*. *ZeroTalk* is a perfect choice. It's a popular forum.

Let's visit [ZeroTalk](http://127.0.0.1:43110/1TaLkFrMwvbNsooF4ioKAY9EuxTBTjipT/). Go to *Test messages* topic, press *Sign in as...* and choose *{yourusername}@zeroid.bit*. Enter some kind of `Hello, world!` and press *Submit comment*. Instead of `Hello, world!`, you can publish this tutorial. :)

Notice `Forums: English · Dansk · Español · Français ...` on the top of the page and select your language. If you are from *China*, better go to the special [New GFW Talk](http://127.0.0.1:43110/19BPUZYAdCMxExKHoVSG3cG95wfUfFTEC9/) zite.
