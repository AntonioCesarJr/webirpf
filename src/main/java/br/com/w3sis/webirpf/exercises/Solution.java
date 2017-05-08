package br.com.w3sis.webirpf.exercises;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Solution {

	public static void main(String[] args) throws Exception {

		BufferedReader buffer = new BufferedReader(new InputStreamReader(System.in));
		String QtdStones = null;
		try {
			QtdStones = buffer.readLine();
			if (!isNumeric(QtdStones)) {
				throw new Exception("Is not an int number !");
			}
		} catch (IOException ioe) {
			throw new Exception("IO error trying to read your number!");
		}

		List<String> stones = new ArrayList<>();

		for (int i = 1; i <= Integer.parseInt(QtdStones); i++) {
			BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
			String stone = new String();
			try {
				stone = bf.readLine();
			} catch (IOException ioe) {
				System.out.println("IO error trying to read your elements!");
				System.exit(1);
			}
			stones.add(stone);
		}
		Long init = System.currentTimeMillis();
		System.out.println(countPrecious(stones));
		Long end = System.currentTimeMillis();
		System.out.println("Finished in " + (end - init) + " ms");
	}

	private static Integer countPrecious(List<String> stones) {
		List<Character> precious = new ArrayList<>();
		List<Character> distinctElementsOfFirstStone = stones.get(0).chars().mapToObj(e -> (char) e)
				.collect(Collectors.toList()).stream().distinct().collect(Collectors.toList());
		distinctElementsOfFirstStone.forEach(element -> {
			boolean isSpecial = true;
			for (int i = 1; i <= stones.size() - 1; i++) {
				System.out.println("Looking for '" + element + "' in stone '" + stones.get(i) + "'");
				if (stones.get(i).indexOf(element) == -1) {
					isSpecial = false;
					continue;
				}
			}
			if (isSpecial && !precious.contains(element)) {
				precious.add(element);
			}
		});
		return precious.size();
	}

	private static boolean isNumeric(String str) {
		try {
			@SuppressWarnings("unused")
			Integer d = Integer.parseInt(str);
		} catch (NumberFormatException nfe) {
			return false;
		}
		return true;
	}
}
