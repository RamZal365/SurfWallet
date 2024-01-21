# SurfWallet

A surfers oriented software where people can store the info about their boards, wetsuits, surfing spots and trips. It will offer advice about next board and wetsuit purchases according the characteristics of the surfer, the spots she/he surfs and her/his level.

## Start the app locally

To start the app locally the following steps need to be followed.

### 1. Clone the repository (Skip if you already have it)

First of all, clone the repository in your local directory.
In a terminal, move to the directory where you want to have your project and then run the following command:

```sh
git clone https://github.com/RamZal365/SurfWallet.git
```

### 2. Run the database

A PostgreSQL database has been setup in a Docker container to make the process easier.
In a terminal, move to the SurfWallet directory and run the following command:

```sh
docker compose up postgres
```

### 3. Run the backend

The following step is going to be runned in the folder ./sw-backend

```sh
cd ./sw-backend
```


(Be sure to have python installed)
To start the api, it would be recommendable to first of all create a virtual environment.

```sh
python -m venv .venv
```

Then activate the virtual environment by running:

```sh
.venv/Scripts/activate
```

Once the virtual environment is set and running it is time to start the api. First, lets install the requirements:

```sh
pip install -r requirements.txt
```

Next we will run the migrations for the database in case there is.

```sh
python manage.py migrate
```

Finally, we will run the server.

```sh
python manage.py runserver
```

This will run the server on the port 8000. To check that the api is running correctly, open an explorer and go to http://localhost:8000/api/ 

### 4. Run the frontend
The following step is going to be runned in the folder ./sw-frontend

```sh
cd ./sw-frontend
```

To run the frontend we are going to first install the requirements by running the following command:

```sh
npm install
```

And then we will run it by using:

```sh
npm start
```