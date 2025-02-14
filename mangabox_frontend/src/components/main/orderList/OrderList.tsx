import React, {FC, useState, useEffect} from 'react';
import styles from "./orderList.module.css"
import {get} from "../../../api/api";
import {getToken} from "../../../utilis/storage";

interface Order {
    id: number;
    date: string;
}

const OrderList: FC = () => {
    const userToken = getToken();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchOrders = async () => {
        try {
            const response = await get('/order/user', {headers: {Authorization: `Bearer ${userToken}`}});
            setOrders(response);
        } catch (err: any) {
            setError('Une erreur est survenue lors du chargement des commandes');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className={styles.orderListContainer}>
            <h2>Mes Commandes</h2>
            {loading && <p>Chargement des commandes...</p>}
            {error && <p className={styles.error}>{error}</p>}
            {orders.length === 0 && !loading && <p>Aucune commande trouvée.</p>}

            <div className={styles.orderList}>
                {orders.map((order) => (
                    <div key={order.id} className={styles.orderCard}>
                        <h3>Commande #{order.id}</h3>
                        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderList;
