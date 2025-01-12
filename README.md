## Table of contents

1. [Introduction](#introduction)
2. [About](#about)
3. [Installation](#installation)
4. [Configuration](#configuration)

# Introduction

### InonaNyVaovao <small style="font-weight:normal">is a dynamic and modern platform built with </small> Laravel, ReactJS <small style="font-weight:normal">and </small>InertiaJS <small style="font-weight:normal">, designed to provide up-to-date news with a primary focus on events and stories from </small>Madagascar<small style="font-weight:normal">. This project aims to bridge the gap between local news and global audiences, presenting timely and relevant content with a seamless user experience.</small>

# About

### InonaNyVaovao <small style="font-weight:normal">is a news blog that delivers comprehensive and reliable coverage of the latest updates, focusing specificallyon</small> Madagascar. <small style="font-weight:normal">The goal is to inform and keep the audience up-to-date with significant events, offering in depth local perspectives.<br> This project utilizes the power of</small> Laravel <small style="font-weight:normal">for backend development, ensuring a robust and scalable structure. </small>ReactJS<small style="font-weight:normal">powers the frontend, providing an interactive and engaging user experience, </small>InertiaJs<small style="font-weight:normal">serves as the bridge to integrate backend with the frontend smoothly, enabling a single page application(SPA) feel without compromising on server-side benefits.<br>This combination of technologies allows us to deliver a fast efficient, and maintenable platform, bringing the latest news to the readers in an easy-to-navigate interface.

</small>

# Installation

1. First, clone the repository by typing the following command:

```bash
git clone https://github.com/Hajatiana032/InonaNyVaovao.git
```

2. Then, run the following command to install all PHP dependencies:.

```bash
composer install
```

3. After that, install the Javascript packages by running:

```bash
yarn install
```

# Configuration

1. Create a `.env` file in the root directory of the project.

2. Then, copy the contents of the `.env.example` file into the newly `.env` file.

3. Next, generate a key for the project by running the following command. This step is **important** for securing our application.

```bash
php artisan key:generate
```

4. Run migration and seeding with the commands:

```bash
php artisan migrate --seed
```

5. Finally, start the server by typing:

```bash
php artisan serve
```

Then, run the developpment server for Javascript:

```bash
yarn run dev
```

### Enjoy 😂!
