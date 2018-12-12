
export const formatValue = number => {
    return "R$ " + number.toFixed(2)
                    .toString()
                    .replace(".", ",")
                    .toLocaleString('pt-BR')
}
