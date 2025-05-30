import { View, Image, TouchableOpacity, FlatList, Modal, Text } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/option"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />

                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>


            </View>
            <Categories />

            <FlatList
                data={["1", "2", "3"]}
                keyExtractor={item => item}
                renderItem={() => (
                    <Link
                        name="RocketSeat"
                        url="https://rocketseat.com.br"
                        onDetails={() => console.log("Clicou!")}
                    />
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal transparent visible={false}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName} >
                            RocketSeat
                        </Text>

                        <Text style={styles.modalUrl} >
                        https://rocketseat.com.br
                        </Text>

                        <View style={styles.modalFooter} >
                            <Option name="EXcluir" icon="delete" variant="secondary" />
                            <Option name="Abrir" icon="language" />
                        </View>

                    </View>
                </View>
            </Modal>

        </View>
    )
}

