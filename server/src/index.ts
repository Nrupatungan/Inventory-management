import {config} from "dotenv"
import e from "express"
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors"

// CONFIGURATIONS
config()
const app = e();
app.use(e.json());
app.use(e.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

// ROUTE IMPORTS
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";

// ROUTES
app.use("/api/v1/dashboard", dashboardRoutes)
app.use("/api/v1/products", productRoutes)
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/expenses", expenseRoutes)

// SERVER
const port = Number(process.env.PORT) || 3000
app.listen(port,"0.0.0.0" ,() => {
    console.log(`Server running on port:${port}`)
})